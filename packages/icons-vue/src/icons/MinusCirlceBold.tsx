// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCirlceBoldSvg from '@ant-design/icons-svg/lib/asn/MinusCirlceBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCirlceBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCirlceBold: MinusCirlceBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCirlceBoldSvg}></AntdIcon>;
};

MinusCirlceBold.displayName = 'MinusCirlceBold';
MinusCirlceBold.inheritAttrs = false;
export default MinusCirlceBold;