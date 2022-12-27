// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/MoreSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreSquareOutline: MoreSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreSquareOutlineSvg}></AntdIcon>;
};

MoreSquareOutline.displayName = 'MoreSquareOutline';
MoreSquareOutline.inheritAttrs = false;
export default MoreSquareOutline;