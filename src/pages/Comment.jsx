import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaUser, FaChartLine, FaArrowDown, FaBoxOpen, FaShareAlt } from 'react-icons/fa';
import './Comment.css';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  position: relative;
  top: -850px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin: 0;
  position: relative;
  right: -100px;
  color: #56487a;
`;

const DateRange = styled.div`
  font-size: 14px;
  color: #888;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 150px;
  color: #56487a;
  font-weight: bold;
`;

const SummaryText = styled.div`
  text-align: left;
`;

const Charts = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const ChartContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 26%;
  text-align: center;
  color: #56487a;
  height: 230px;
  margin-left: 50px;
`;

const Activity = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
  height: 160px;
  width: 1300px;
  position: relative;
  right: -55px;
  color: #56487a;
`;

const Audience = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PieColors = ['#56487a', '#130C2A', '#FF8042', '#0088FE', '#FF4444', '#AAAAAA'];

const pieData = [
  { name: 'Retro', value: 400 },
  { name: 'OG', value: 300 },
  { name: 'Other', value: 300 }
];

const groupData = [
  { name: '20+', value: 400 },
  { name: '35+', value: 300 },
  { name: 'Other', value: 300 }
];

const deviceData = [
  { name: 'Website', value: 400 },
  { name: 'Amazon', value: 300 },
  { name: 'Flipkart', value: 300 },
  { name: 'Outlet', value: 200 },
  { name: 'Other', value: 100 }
];

const lineData = [
  { name: '15 Sep', Old_Customer: 1000, New_Customer: 2400 },
  { name: '16 Sep', Old_Customer: 3000, New_Customer: 1398 },
  { name: '17 Sep', Old_Customer: 2000, New_Customer: 9800 },
  { name: '18 Sep', Old_Customer: 2780, New_Customer: 3908 },
  { name: '19 Sep', Old_Customer: 1890, New_Customer: 4800 },
  { name: '20 Sep', Old_Customer: 2390, New_Customer: 3800 },
  { name: '21 Sep', Old_Customer: 3490, New_Customer: 4300 }
];

const Comment = () => {
  return (
    <Container>
      <Header>
        <Title>Reports</Title>
        <DateRange>
          <span>Showing data for:</span>
          <span>15 Sep, 2025 - 21 Sep, 2025</span>
        </DateRange>
      </Header>

      <Summary>
        <SummaryItem>
          <SummaryText>
            <h2>3,594</h2>
            <p>Active users</p>
          </SummaryText>
          <FaUser size={25} />
        </SummaryItem>
        <SummaryItem>
          <SummaryText>
            <h2>30%</h2>
            <p>Retention rate</p>
          </SummaryText>
          <FaChartLine size={25} />
        </SummaryItem>
        <SummaryItem>
          <SummaryText>
            <h2>234</h2>
            <p>Points drop</p>
          </SummaryText>
          <FaArrowDown size={25} />
        </SummaryItem>
        <SummaryItem>
          <SummaryText>
            <h2>21</h2>
            <p>SKUs</p>
          </SummaryText>
          <FaBoxOpen size={25} />
        </SummaryItem>
        <SummaryItem>
          <SummaryText>
            <h2>13,456</h2>
            <p>Referrals</p>
          </SummaryText>
          <FaShareAlt size={25} />
        </SummaryItem>
      </Summary>

      <Charts>
        <ChartContainer>
          <h3>Bestsellers</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PieColors[index % PieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <ChartContainer>
          <h3>Most active groups</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={groupData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {groupData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PieColors[index % PieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <ChartContainer>
          <h3>Sales Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={deviceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PieColors[index % PieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Charts>

      <Activity>
        <h3>Sales</h3>
        <ResponsiveContainer width="90%" height={120}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Old_Customer" stroke="#8884d8" />
            <Line type="monotone" dataKey="New_Customer" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Activity>

      {/* <Audience>
        <h3>Audience</h3>
        <div className="map">[Map]</div>
      </Audience> */}
    </Container>
  );
};

export default Comment;
