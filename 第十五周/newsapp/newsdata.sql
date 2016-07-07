-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-04-23 07:59:09
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newsdata`
--

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE `login` (
  `name` text NOT NULL,
  `password` text NOT NULL,
  `token` varchar(1024) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`name`, `password`, `token`, `id`) VALUES
('name', 'password', 'TVj3sMS7-Ly6EH6AzhOfxT_WkvDmq5IM6EX4', 1),
('admin', 'admin', 'Uh1WWIkX-ukd5Sg9C0j-jGSZj6DTBlnGq2w4', 2);

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(10) UNSIGNED NOT NULL,
  `newstype` text NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `newstime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstype`, `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES
(4, 'type3', '央行围剿P2P首付贷对房价影响几何？', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C1%2C366%2C219%3Bw%3D638/sign=dbc1f8a2962397ddc236c24464b29e86/314e251f95cad1c8197f3d62783e6709c83d51ab.jpg', '买房人的首付不能是借的。', '2016-03-10'),
(5, 'type3', '顺丰上市：快递之王卫冕之战', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C2%2C738%2C443%3Bw%3D638/sign=e88a1a5e2f34349b604934c5f4da39fc/ca1349540923dd549be95c2cd609b3de9d8248d8.jpg', '一向声称不缺钱的顺丰创始人王卫，突然出手将顺丰推向国内的资本市场。', '2016-03-10'),
(6, 'type2', 'AlphaGo：人类棋手被吊打而不自知', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=809f9249219759ee4a5063c88afa434e/d62a6059252dd42aa051f7ef043b5bb5c9eab81e.jpg', '万众瞩目的人机大战已经完成两回合，机器超出大多数人的想象获胜了，而且是大胜，棋坛震动。', '2016-03-10'),
(8, 'type3', '人机世纪大战为何会引爆传播？', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C6%2C667%2C400%3Bw%3D638/sign=ff6cd86aafd3fd1f2246f87a0d7e0929/8326cffc1e178a82c4e634e4f103738da877e898.jpg', '这一次人机世纪大战之所以会引发如此大的传播度，这其中绝对少不了众多科技公司在暗中使劲。', '2016-03-13'),
(9, 'type2', '作为产品经理，你的核心技能是什么？', 'http://f.hiphotos.baidu.com/news/w%3D638/sign=db6ab0849752982205333ac0efcb7b3b/d439b6003af33a8774198c59c15c10385343b579.jpg', '产品经理第三项核心技能就是以上这些，推动者、合作桥梁、组织润滑剂。', '2016-03-08'),
(10, 'type1', '巴曙松：房市回暖之后何处去？<script>alert(1)</script>', 'http://d.hiphotos.baidu.com/news/crop=0,2,1025,615;w=638/sign=3a8c9f1e52fbb2fb20640252727a0c96/b21bb051f8198618551878c74ded2e738bd4e612.jpg', '房地产政策推动一线城市投资需求抬头。', '2016-04-01'),
(11, 'type1', '迅雷陷亏损，小米在哪里？', 'http://e.hiphotos.baidu.com/news/crop%3D0%2C1%2C514%2C308%3Bw%3D638/sign=c8a684e0a3c27d1eb169618426e5815f/7af40ad162d9f2d34bb512abaeec8a136227ccc9.jpg', '迅雷上季度陷入亏损，而且收入陷入停滞，在中国高度竞争的在线视频市场上，这对规模已经很小的腾讯来...', '2016-03-09'),
(12, 'type2', '造就| 造价十亿美元的人工智能计划', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C23%2C601%2C360%3Bw%3D638/sign=8d87774a1830e924dbebc67171384234/d01373f082025aaf2e801489fcedab64024f1ac5.jpg', '这就是马斯克和阿尔特曼传递出来的信息。', '2016-03-07'),
(13, 'type2', '为什么我绝不会再买汽油车', 'http://c.hiphotos.baidu.com/news/crop%3D48%2C0%2C1493%2C896%3Bw%3D638/sign=d95166b7b04543a9e154a08c2323b2ae/b219ebc4b74543a9e86e428f19178a82b901147f.jpg', '只是因为它在几乎所有方面都能带来更好的体验：更好的驾驶体验、更好的拥有体验，以及更好的文化体验。', '2016-03-02'),
(14, 'type3', '10亿美元的银行大劫案败在一个拼写错误上', 'http://c.hiphotos.baidu.com/news/w%3D638/sign=225b958736adcbef01347d0594ae2e0e/fcfaaf51f3deb48f7ead0d9df71f3a292cf578a9.jpg', '黑客还是设法盗走了8100万美元，这是目前已知的最大银行盗窃案。', '2016-03-08'),
(16, 'type2', '阿尔法完胜，人类怎么办？', '0%2C23%2C600%2C360%3Bw%3D638/sign=0f8f8de00d7b0208188665a15fe9dee1/024f78f0f736afc318b89a20b419ebc4b745123a.jpg', '我们都知道人工智能迟早赶上人类，只是不愿意也没有料到超越来的怎么快，以致还来不及做好防止下一步...', '2016-03-08'),
(18, 'type1', '阿尔法完胜，人类怎么办？', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C1%2C366%2C219%3Bw%3D638/sign=dbc1f8a2962397ddc236c24464b29e86/314e251f95cad1c8197f3d62783e6709c83d51ab.jpg', '我们都知道人工智能迟早赶上人类，只是不愿意也没有料到超越来的怎么快，以致还来不及做好防止下一步...', '2016-03-08'),
(19, 'type1', '中国电影的“小镇青年”困境', 'http://d.hiphotos.baidu.com/news/crop%3D47%2C0%2C272%2C163%3Bw%3D638/sign=72b1db72374e251ff6b8beb89ab2fe3b/b8389b504fc2d562b6b0a9a5e01190ef76c66c39.jpg', '在讨论小镇青年问题时曾指出，时代变了，支撑电影市场的三四线城市观众80后90后的都市中产青年观...', '2016-03-16'),
(20, 'type1', '猪食金融战：一周斩获三亿利润的背后故事', 'http://b.hiphotos.baidu.com/news/w%3D638/sign=92aaf734560fd9f9a017566a1d2cd42b/902397dda144ad3420d05fcfd7a20cf431ad850f.jpg', '造就：线下剧院式的演讲平台，发现最有创造力的思想。', '2016-03-16'),
(21, 'type1', '311地震五年后，日本仍在搜寻失踪者', 'http://t12.baidu.com/it/u=http://img4.cache.netease.com/cnews/2016/3/11/20160311073746ec3f8.jpg&fm=36', '造就：线下剧院式的演讲平台，发现最有创造力的思想。', '0000-00-00'),
(22, 'type1', '311地震五年后，日本仍在搜寻失踪者', 'http://t12.baidu.com/it/u=http://y2.ifengimg.com/cmpp/2016/03/28/05/c33b9137-95ce-43fb-849c-d44aebeb2b99_size76_w550_h366.jpg&fm=36', '111111111111111111', '0000-00-00'),
(25, 'type1', '阿尔法完胜，人类怎么办', 'http://t12.baidu.com/it/u=http://images.huxiu.com/article/cover/201603/28/005008276740.jpg?imageView2/1/w/800/h/450/imageMogr2/strip/interlace/1/quality/85/format/jpg&fm=36', '1111111', '2016-03-04'),
(26, 'type1', '311地震五年后，日本仍在搜寻失踪者', 'http://t12.baidu.com/it/u=http://www.chinanews.com/it/2016/03-28/U144P4T8D7814161F107DT20160328110625.jpg&fm=36', '111111111', '2016-03-05'),
(27, 'type3', '阿尔法完胜，人类怎么办', 'http://t10.baidu.com/it/u=http://www.chinanews.com/2016/0328/201632811535.jpg&fm=36', '11111', '2016-03-26'),
(28, 'type1', '巴曙松：房市回暖之后何处去？', 'http://t10.baidu.com/it/u=http://img2.cache.netease.com/3g/2016/3/8/20160308100136e4bd0.jpg&fm=36', '1111', '2016-03-31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
