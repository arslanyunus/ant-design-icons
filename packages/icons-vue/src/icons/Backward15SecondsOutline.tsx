// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward15SecondsOutlineSvg from '@ant-design/icons-svg/lib/asn/Backward15SecondsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward15SecondsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward15SecondsOutline: Backward15SecondsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward15SecondsOutlineSvg}></AntdIcon>;
};

Backward15SecondsOutline.displayName = 'Backward15SecondsOutline';
Backward15SecondsOutline.inheritAttrs = false;
export default Backward15SecondsOutline;