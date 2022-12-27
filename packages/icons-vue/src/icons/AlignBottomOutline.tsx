// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignBottomOutlineSvg from '@ant-design/icons-svg/lib/asn/AlignBottomOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignBottomOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignBottomOutline: AlignBottomOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignBottomOutlineSvg}></AntdIcon>;
};

AlignBottomOutline.displayName = 'AlignBottomOutline';
AlignBottomOutline.inheritAttrs = false;
export default AlignBottomOutline;