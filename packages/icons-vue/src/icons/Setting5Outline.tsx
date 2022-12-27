// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting5OutlineSvg from '@ant-design/icons-svg/lib/asn/Setting5Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting5OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting5Outline: Setting5OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting5OutlineSvg}></AntdIcon>;
};

Setting5Outline.displayName = 'Setting5Outline';
Setting5Outline.inheritAttrs = false;
export default Setting5Outline;