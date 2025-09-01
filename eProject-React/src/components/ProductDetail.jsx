import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf'; // Thư viện PDF
import htmlDocx from 'html-docx-js/dist/html-docx'; // Thư viện DOC

const ProductDetail = () => {
  const { id } = useParams();  // Lấy id sản phẩm từ URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);// Giá trị mặc định là 1
  
    const handleIncrease = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const handleDecrease = () => {
      setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
    };
  
    const handleChange = (event) => {
      const value = parseInt(event.target.value, 10);
      setQuantity(isNaN(value) ? 0 : value);
    };

  const handleBuyNowClick = () => {
    // Lấy dữ liệu giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cartData')) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Nếu có rồi, tăng số lượng
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Nếu chưa có, thêm sản phẩm vào giỏ hàng
      cart.push({
        ...product,
        quantity: quantity
      });
    }

    // Lưu lại giỏ hàng vào localStorage
    localStorage.setItem('cartData', JSON.stringify(cart));

    alert("The product has been added to the cart!");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const margin = 10; // Lề
    const pageHeight = doc.internal.pageSize.height; // Chiều cao trang PDF
    let yPosition = 20;  // Vị trí Y ban đầu (sau tiêu đề)

    // Thêm tên sản phẩm
    doc.text(`Product Name: ${product.name}`, margin, yPosition);
    yPosition += 10; // Cập nhật vị trí Y

    // Thêm giá sản phẩm
    doc.text(`Price: ${product.price} USD`, margin, yPosition);
    yPosition += 10; // Cập nhật vị trí Y

    // Mô tả sản phẩm với splitTextToSize để đảm bảo các dòng không bị dài quá
    const description = product.des;
    const lines = doc.splitTextToSize(description, 180);  // Chia mô tả thành các dòng có chiều dài tối đa là 180px

    // In mô tả xuống PDF
    lines.forEach((line, index) => {
      if (yPosition + 10 > pageHeight) {
        doc.addPage();  // Thêm trang mới nếu nội dung vượt quá chiều cao của trang hiện tại
        yPosition = 20;  // Reset vị trí Y sau khi thêm trang mới
      }
      doc.text(line, margin, yPosition);
      yPosition += 8;  // Tăng tọa độ Y để tiếp tục với dòng tiếp theo
    });

    // Thêm thông tin về số lượng và tổng giá
    doc.text(`Quantity: ${quantity}`, margin, yPosition);
    yPosition += 10;

    doc.text(`Total Price: ${(quantity * parseFloat(product.price)).toFixed(2)} USD`, margin, yPosition);
    yPosition += 10;

    // Thêm hình ảnh sản phẩm vào PDF
    const images = product.img; // Mảng các hình ảnh của sản phẩm
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image;  // Đảm bảo rằng các đường dẫn ảnh hợp lệ (base64 hoặc URL)

      img.onload = () => {
        // Kiểm tra nếu hình ảnh sẽ vượt quá trang hiện tại
        if (yPosition + 160 > pageHeight) {
          doc.addPage();  // Thêm trang mới nếu hình ảnh không vừa với trang
          yPosition = 20;  // Reset vị trí Y sau khi thêm trang mới
        }

        // Chèn hình ảnh vào PDF (cấu hình độ rộng, chiều cao và vị trí)
        doc.addImage(img, 'JPEG', margin, yPosition, 180, 160);  // Điều chỉnh các thông số chiều rộng, chiều cao
        yPosition += 170;  // Cập nhật lại vị trí Y sau khi thêm hình ảnh (giữ khoảng cách giữa các hình ảnh)

        // Kiểm tra xem đã in hết hình ảnh chưa, nếu chưa thì tiếp tục
        if (index === images.length - 1) {
          // Lưu file PDF sau khi tất cả các hình ảnh đã được thêm
          doc.save(`${product.name}.pdf`);
        }
      };
    });
  };


  const downloadDOC = () => {
    // Tải tất cả hình ảnh về dưới dạng base64
    const imagesBase64Promises = product.img.map((imgSrc) => {
      return fetch(imgSrc)
        .then(response => response.blob())
        .then(blob => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        });
    });

    // Sau khi tải tất cả hình ảnh về
    Promise.all(imagesBase64Promises).then(imagesBase64 => {
      // Tạo nội dung HTML với hình ảnh base64
      const htmlContent = `
        <h2>Product Name: ${product.name}</h2>
        <p>Price: ${product.price} USD</p>
        <p>Description:</p>
        <p>${product.des.split('.').map(sentence => `<span>${sentence.trim()}.</span><br />`).join('')}</p>
        <p>Quantity: ${quantity}</p>
        <p>Total Price: ${(quantity * parseFloat(product.price)).toFixed(2)} USD</p>
        
        <p>Images:</p>
        ${imagesBase64.map((base64Image, index) => {
        return `<img src="${base64Image}" alt="product-image-${index}" style="max-width:50px; height:auto; display:block; margin: 10px 0; page-break-inside:avoid;">`;
      }).join('')}
      `;

      // Tạo file DOC từ nội dung HTML
      const docx = htmlDocx.asBlob(htmlContent);

      // Tạo link tải file DOC
      const link = document.createElement('a');
      link.href = URL.createObjectURL(docx);
      link.download = `${product.name}.docx`;
      link.click();
    }).catch(error => {
      console.error("Lỗi khi tải hình ảnh: ", error);
    });
  };


  useEffect(() => {
    fetch('/sp.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === id);  // Tìm sản phẩm theo id
        setProduct(foundProduct);
      })
      .catch(error => console.error("Lỗi khi tải dữ liệu sản phẩm:", error));
  }, [id]);

  // Cấu hình cho carousel (slick)
  const settings = {
    dots: true,  // Hiển thị các điểm chấm dưới carousel
    infinite: true,  // Lặp lại carousel khi đến cuối
    speed: 500,  // Thời gian chuyển tiếp (ms)
    slidesToShow: 1,  // Chỉ hiển thị một hình ảnh tại một thời điểm
    slidesToScroll: 1,  // Mỗi lần chuyển chỉ di chuyển một hình ảnh
  };

  if (!product) {
    return <p>Đang tải sản phẩm...</p>;
  }

  return (
    <div>
      <div className="product-detail">
        <div className='product-ovv'>
          <div className="product-image">
            <Slider {...settings}>
              {/* Hiển thị video nếu có */}
              {product.video && (
                <div>
                  <video controls autoPlay loop width="100%" className="centered-media">
                    <source src={product.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              {/* Hiển thị hình ảnh */}
              {product.img.map((image, index) => (
                <div key={index} className="media-container">
                  <img src={image} alt={`${product.name}-${index}`} className="centered-media" />
                </div>
              ))}
            </Slider>
          </div>
          <div className='product-basic'>
            <h3>{product.name}</h3>
            <p>Retail price: {product.price} USD</p>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-control">
                <button className="minus" onClick={handleDecrease}>
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  min="0"
                  onChange={handleChange}
                />
                <button className="plus" onClick={handleIncrease}>
                  +
                </button>
              </div>
            </div>
            <div className='total-price'>
              <p><strong>Total Price:</strong> {`$${(quantity * parseFloat(product.price)).toFixed(2)}`}</p>
            </div>
            <div>
              <button onClick={handleBuyNowClick}>Buy Now</button>
            </div>

            <div className='product-incentives'>
              <p>Incentives</p>
              <p>- Customers who order more than 1000 bottles get a <span>2%</span> discount</p>
              <p>- Customers who order more than 5000 bottles get a <span>10%</span> discount</p>
            </div>


          </div>
        </div>
        <div className='prd-info'>
          <div>Detail</div>
          <h3>Product Information</h3>
          <h3>Name: {product.name}</h3>
          <h3>
            {product.des.split('.').map((sentence, index) => (
              <span key={index}>{sentence.trim()}{index < product.des.split('.').length - 1 && '.'}<br /></span>
            ))}
          </h3>
          <div className='download-btn'>
            <button onClick={downloadPDF}>Download as PDF</button>
            <button onClick={downloadDOC}>Download as DOC</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
