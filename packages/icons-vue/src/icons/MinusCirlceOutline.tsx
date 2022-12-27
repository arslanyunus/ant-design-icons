// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCirlceOutlineSvg from '@ant-design/icons-svg/lib/asn/MinusCirlceOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCirlceOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCirlceOutline: MinusCirlceOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCirlceOutlineSvg}></AntdIcon>;
};

MinusCirlceOutline.displayName = 'MinusCirlceOutline';
MinusCirlceOutline.inheritAttrs = false;
export default MinusCirlceOutline;