// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AquariusOutlineSvg from '@ant-design/icons-svg/lib/asn/AquariusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AquariusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AquariusOutline: AquariusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AquariusOutlineSvg}></AntdIcon>;
};

AquariusOutline.displayName = 'AquariusOutline';
AquariusOutline.inheritAttrs = false;
export default AquariusOutline;