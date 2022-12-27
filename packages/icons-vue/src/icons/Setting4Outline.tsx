// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting4OutlineSvg from '@ant-design/icons-svg/lib/asn/Setting4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting4Outline: Setting4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting4OutlineSvg}></AntdIcon>;
};

Setting4Outline.displayName = 'Setting4Outline';
Setting4Outline.inheritAttrs = false;
export default Setting4Outline;