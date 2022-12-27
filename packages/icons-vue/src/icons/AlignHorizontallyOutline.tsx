// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignHorizontallyOutlineSvg from '@ant-design/icons-svg/lib/asn/AlignHorizontallyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignHorizontallyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignHorizontallyOutline: AlignHorizontallyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignHorizontallyOutlineSvg}></AntdIcon>;
};

AlignHorizontallyOutline.displayName = 'AlignHorizontallyOutline';
AlignHorizontallyOutline.inheritAttrs = false;
export default AlignHorizontallyOutline;