// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalEditOutlineSvg from '@ant-design/icons-svg/lib/asn/GlobalEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalEditOutline: GlobalEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalEditOutlineSvg}></AntdIcon>;
};

GlobalEditOutline.displayName = 'GlobalEditOutline';
GlobalEditOutline.inheritAttrs = false;
export default GlobalEditOutline;