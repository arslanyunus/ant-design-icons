// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward5SecondsOutlineSvg from '@ant-design/icons-svg/lib/asn/Forward5SecondsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward5SecondsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward5SecondsOutline: Forward5SecondsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward5SecondsOutlineSvg}></AntdIcon>;
};

Forward5SecondsOutline.displayName = 'Forward5SecondsOutline';
Forward5SecondsOutline.inheritAttrs = false;
export default Forward5SecondsOutline;