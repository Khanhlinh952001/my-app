import Link from "next/link";
import img from "../public/logo.jpg";
import { IoAccessibilityOutline } from "react-icons/io5";
import { CgPlayListCheck } from "react-icons/cg";
import { GoBook } from "react-icons/go";
import { FaEarListen } from "react-icons/fa6";

import { CiPenpot } from "react-icons/ci";

export default function Home() {
  return (
    <main>
      <div className="bg-white ">
        {/* header */}

        <div className="lg:h-[60px] bg-white border-b border-gray-300 ">
          <div className="container flex flex-col lg:flex-row justify-between pb-2">
            {/* Logo */}
            <div className="flex items-center lg:ml-20">
              <img className="w-10 mt-2 h-10" src="logo.jpg" alt="logo" />
              <h2 className="text-[#b61e3b] font-bold mt-4 ml-2">
                Tiếng Hàn Thu Huế
              </h2>
            </div>

            {/* Navigation Links */}
            <div className="lg:flex lg:justify-center mt-4">
              <h3 className="text-gray-800 text-lg hover:bg-[#b61e3b] hover:text-white px-3 py-1 h-8 mx-2 rounded">
                Tự ôn luyện
              </h3>
              <h3 className="text-gray-800 text-lg hover:bg-[#b61e3b] hover:text-white px-3 py-1 h-8 mx-2 rounded">
                Ôn cùng nhau
              </h3>
              <Link href="/Listen">
                <h3 className="text-gray-800 text-lg hover:bg-[#b61e3b] hover:text-white px-3 pt-1 h-8 mx-2 rounded">
                  Kiểm tra nghe
                </h3>
              </Link>
              <Link href="/Reading">
                <h3 className="text-gray-800 text-lg hover:bg-[#b61e3b] hover:text-white px-3 py-1 h-8 mx-2 rounded">
                  Kiểm tra đọc
                </h3>
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="lg:flex items-center mt-4">
              <button className="text-[#b61e3b] mx-2">Đăng ký</button>
              <button className="text-white bg-[#b61e3b] px-2 rounded-xl">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>



        {/* container */}

        <div className="sm:block md:flex lg:flex bg-white justify-around">
          {/*  */}
          <div>
         
            <h1 className="text-[#b61e3b] sm:mt-32 md:mt-32 lg:mt-60 text-3xl text-center ">
              Ôn thi chứng chỉ Topik hiệu quả
            </h1>
            <p className="text-gray-800 mt-2 text-lg sm:px-5 md:px-5">
              Bạn sẽ nhanh chóng cải thiện kỹ năng làm bài thi của mình chỉ
              trong 3 tuần
            </p>
            
                <button className="text-white bg-[#b61e3b] hover:bg-[#e9b0bb] px-6 py-3 rounded-3xl mt-4 ml-52">
              Bắt đầu ngay
            </button>
           
            
          </div>
          <div className="mt-10">
            <img src="landing-1.jpg" />
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <div>
            <div>
              <h1 className="text-[#b61e3d] text-2xl font-medium ml-8 text-center">
                Hệ thống được phát triển với
              </h1>
              <h1 className="text-gray-700 text-4xl mb-20 mt-4 text-center">
                Các chức năng chính sau
              </h1>
              <div className="lg:flex md:flex sm:block">
                <div className=" w-72  border-double border-2 mx-8 border-[#b61e3d] text-center">
                  <div className="flex justify-center mt-20 mb-4">
                    <IoAccessibilityOutline className="text-gray-600 text-4xl" />
                  </div>
                  <h1 className="text-gray-800 text-2xl font-medium">
                    Làm bài thi Topik
                  </h1>
                  <p className="text-gray-700 px-4 text-justify pb-8 mt-4">
                    Các bài thi Topik đã được công bố giúp bạn ôn luyện, đánh
                    giá khả năng của mình qua các bài thi. Nội dung được chia
                    theo các kỳ thi, kỹ năng thi, giao diện làm bài thi thân
                    thiện, dễ dàng sử dụng. Theo dõi sự tiến bộ của mình trong
                    trang cá nhân
                  </p>
                </div>

                <div className="w-72   border-double border-2 mx-8 border-[#b61e3d] text-center">
                  <div className="flex justify-center mt-20 mb-4">
                    <CiPenpot className="text-gray-600 text-4xl" />
                  </div>
                  <h1 className="text-gray-800 text-2xl font-medium">
                    Kinh nghiệm làm bài thi
                  </h1>
                  <p className="text-gray-700 px-4 text-justify pb-8 mt-4">
                    Các kinh nghiệm làm bài thi Topik một cách hiệu quả được
                    chia sẻ bởi các bạn có chứng chỉ Topik 5 trở lên. Những kinh
                    nghiệm này sẽ giúp đỡ bạn thật sự hiệu quả trong chiến lược
                    làm bài thi. Bên cạnh đó, bạn có thể liên hệ trực tiếp để
                    trao đổi, học hỏi kinh nghiệm
                  </p>
                </div>

                <div className="w-72   border-double border-2 mx-8 border-[#b61e3d] text-center">
                  <div className="flex justify-center mt-20 mb-4 ">
                    <CgPlayListCheck className="text-gray-600 text-4xl" />
                  </div>
                  <h1 className="text-gray-800 text-2xl font-medium">
                    Ôn luyện, củng cố ngữ pháp
                  </h1>
                  <p className="text-gray-700 px-4 text-justify pb-8 mt-4">
                    Nội dung ngữ pháp được tổng hợp, thể hiện một cách sinh
                    động, trực quan thông qua các hình ảnh bắt mắt. Bên cạnh đó,
                    mỗi phần nghữ pháp đều được xây dựng bài tập ôn luyện, hướng
                    dẫn sử dụng cấu trúc ngữ pháp, giúp bạn dễ dàng ghi nhớ kiến
                    thức
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className=" sm:block lg:flex md:flex">
                <div className="w-72  border-double border-2 mx-8 border-[#b61e3d] text-center">
                  <div className="flex justify-center mt-20 mb-4">
                    <GoBook className="text-gray-600 text-4xl" />
                  </div>
                  <h1 className="text-gray-800 text-2xl font-medium">
                    Ôn luyện, củng cố từ vựng
                  </h1>
                  <p className="text-gray-700 px-4 text-justify pb-8 mt-4">
                    Hơn 6000 từ vựng tiếng hàn, chia thành các chủ đề theo các
                    cấp độ Topik, với các ví dụ cách sử dụng giúp cho bạn dễ
                    dàng ghi nhớ.
                  </p>
                </div>

                <div className="w-72   border-double border-2 mx-8 border-[#b61e3d] text-center">
                  <div className="flex justify-center mt-20 mb-4">
                    <FaEarListen className="text-gray-600 text-4xl" />
                  </div>
                  <h1 className="text-gray-800 text-2xl font-medium">
                    Ôn luyện kỹ năng Nghe, Đọc
                  </h1>
                  <p className="text-gray-700 px-4 text-justify pb-8 mt-4">
                    Ôn luyện kỹ năng nghe từng cấu trúc câu trong đề thi Topik.
                    Bạn có thể chọn lựa các câu trong đề thi và chỉ ôn luyện cho
                    phần kỹ năng đó. Chức năng này giúp bạn tiết kiệm thời gian,
                    tập trung hiệu quả kiến thức cần cải thiện trong từng nội
                    dung.
                  </p>
                </div>

                <div className="w-72   border-double border-2 mx-8 border-[#b61e3d] text-center">
                  <div className="flex justify-center mt-20 mb-4 ">
                    <CgPlayListCheck className="text-gray-600 text-4xl" />
                  </div>
                  <h1 className="text-gray-800 text-2xl font-medium">
                    Và nhiều các chức năng khác
                  </h1>
                  <p className="text-gray-700 px-4 text-justify pb-8 mt-4">
                    Hệ thống đang được phát triển thêm nhiều chức năng hữu ích
                    khác. Bên cạnh đó, nếu bạn muốn hệ thống có chức năng nào
                    đó, hãy gửi góp ý về địa chỉ email:
                    <span className="font-bold">tienghanthuhue@gmail.com</span>{" "}
                    Nhóm phát triển sẽ tổng hợp và xây dựng các chức năng mới
                    theo nhu cầu của đông đảo người sử dụng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* foooter */}

        <footer class="flex flex-col items-center mt-80 text-center text-white bg-[#b61e3b]">
          <div class="container pt-9">
            <div class="mb-9 flex justify-center">
              <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          <div class="w-full bg-neutral-300 p-4 text-center text-neutral-700 bg-[#c44d63] dark:text-neutral-200">
            © 2024 Copyright:
            <a
              class="text-neutral-800 dark:text-white ml-2"
              href="https://www.facebook.com/linh.vokhanh.395"
            >
              LinhCoder
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

