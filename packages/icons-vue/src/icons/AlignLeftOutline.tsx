// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignLeftOutlineSvg from '@ant-design/icons-svg/lib/asn/AlignLeftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignLeftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignLeftOutline: AlignLeftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignLeftOutlineSvg}></AntdIcon>;
};

AlignLeftOutline.displayName = 'AlignLeftOutline';
AlignLeftOutline.inheritAttrs = false;
export default AlignLeftOutline;