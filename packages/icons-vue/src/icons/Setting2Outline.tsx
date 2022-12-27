// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting2OutlineSvg from '@ant-design/icons-svg/lib/asn/Setting2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting2Outline: Setting2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting2OutlineSvg}></AntdIcon>;
};

Setting2Outline.displayName = 'Setting2Outline';
Setting2Outline.inheritAttrs = false;
export default Setting2Outline;