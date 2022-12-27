// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickSquareBoldSvg from '@ant-design/icons-svg/lib/asn/TickSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickSquareBold: TickSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickSquareBoldSvg}></AntdIcon>;
};

TickSquareBold.displayName = 'TickSquareBold';
TickSquareBold.inheritAttrs = false;
export default TickSquareBold;