// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusBrokenSvg from '@ant-design/icons-svg/lib/asn/MinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusBroken: MinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusBrokenSvg}></AntdIcon>;
};

MinusBroken.displayName = 'MinusBroken';
MinusBroken.inheritAttrs = false;
export default MinusBroken;