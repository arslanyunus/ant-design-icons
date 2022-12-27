// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home1OutlineSvg from '@ant-design/icons-svg/lib/asn/Home1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home1Outline: Home1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home1OutlineSvg}></AntdIcon>;
};

Home1Outline.displayName = 'Home1Outline';
Home1Outline.inheritAttrs = false;
export default Home1Outline;