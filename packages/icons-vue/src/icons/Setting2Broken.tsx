// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting2BrokenSvg from '@ant-design/icons-svg/lib/asn/Setting2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting2Broken: Setting2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting2BrokenSvg}></AntdIcon>;
};

Setting2Broken.displayName = 'Setting2Broken';
Setting2Broken.inheritAttrs = false;
export default Setting2Broken;