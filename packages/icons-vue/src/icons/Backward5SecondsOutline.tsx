// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward5SecondsOutlineSvg from '@ant-design/icons-svg/lib/asn/Backward5SecondsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward5SecondsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward5SecondsOutline: Backward5SecondsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward5SecondsOutlineSvg}></AntdIcon>;
};

Backward5SecondsOutline.displayName = 'Backward5SecondsOutline';
Backward5SecondsOutline.inheritAttrs = false;
export default Backward5SecondsOutline;