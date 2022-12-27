// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home1BrokenSvg from '@ant-design/icons-svg/lib/asn/Home1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home1Broken: Home1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home1BrokenSvg}></AntdIcon>;
};

Home1Broken.displayName = 'Home1Broken';
Home1Broken.inheritAttrs = false;
export default Home1Broken;