// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignRightBoldSvg from '@ant-design/icons-svg/lib/asn/AlignRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignRightBold: AlignRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignRightBoldSvg}></AntdIcon>;
};

AlignRightBold.displayName = 'AlignRightBold';
AlignRightBold.inheritAttrs = false;
export default AlignRightBold;