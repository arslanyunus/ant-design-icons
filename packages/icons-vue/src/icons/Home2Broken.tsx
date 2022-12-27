// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home2BrokenSvg from '@ant-design/icons-svg/lib/asn/Home2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home2Broken: Home2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home2BrokenSvg}></AntdIcon>;
};

Home2Broken.displayName = 'Home2Broken';
Home2Broken.inheritAttrs = false;
export default Home2Broken;