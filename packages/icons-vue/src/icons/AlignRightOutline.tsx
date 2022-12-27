// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignRightOutlineSvg from '@ant-design/icons-svg/lib/asn/AlignRightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignRightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignRightOutline: AlignRightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignRightOutlineSvg}></AntdIcon>;
};

AlignRightOutline.displayName = 'AlignRightOutline';
AlignRightOutline.inheritAttrs = false;
export default AlignRightOutline;