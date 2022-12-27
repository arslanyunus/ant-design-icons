// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/BackSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackSquareOutline: BackSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackSquareOutlineSvg}></AntdIcon>;
};

BackSquareOutline.displayName = 'BackSquareOutline';
BackSquareOutline.inheritAttrs = false;
export default BackSquareOutline;