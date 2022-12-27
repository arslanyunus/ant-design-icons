// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting2BoldSvg from '@ant-design/icons-svg/lib/asn/Setting2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting2Bold: Setting2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting2BoldSvg}></AntdIcon>;
};

Setting2Bold.displayName = 'Setting2Bold';
Setting2Bold.inheritAttrs = false;
export default Setting2Bold;