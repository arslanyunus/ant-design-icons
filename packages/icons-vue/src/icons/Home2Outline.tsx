// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Home2OutlineSvg from '@ant-design/icons-svg/lib/asn/Home2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Home2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Home2Outline: Home2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Home2OutlineSvg}></AntdIcon>;
};

Home2Outline.displayName = 'Home2Outline';
Home2Outline.inheritAttrs = false;
export default Home2Outline;