// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusCirlceBrokenSvg from '@ant-design/icons-svg/lib/asn/MinusCirlceBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusCirlceBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusCirlceBroken: MinusCirlceBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusCirlceBrokenSvg}></AntdIcon>;
};

MinusCirlceBroken.displayName = 'MinusCirlceBroken';
MinusCirlceBroken.inheritAttrs = false;
export default MinusCirlceBroken;