// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting4BoldSvg from '@ant-design/icons-svg/lib/asn/Setting4Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting4BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting4Bold: Setting4BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting4BoldSvg}></AntdIcon>;
};

Setting4Bold.displayName = 'Setting4Bold';
Setting4Bold.inheritAttrs = false;
export default Setting4Bold;