// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignVerticallyOutlineSvg from '@ant-design/icons-svg/lib/asn/AlignVerticallyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignVerticallyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignVerticallyOutline: AlignVerticallyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignVerticallyOutlineSvg}></AntdIcon>;
};

AlignVerticallyOutline.displayName = 'AlignVerticallyOutline';
AlignVerticallyOutline.inheritAttrs = false;
export default AlignVerticallyOutline;