// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/TickSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickSquareOutline: TickSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickSquareOutlineSvg}></AntdIcon>;
};

TickSquareOutline.displayName = 'TickSquareOutline';
TickSquareOutline.inheritAttrs = false;
export default TickSquareOutline;