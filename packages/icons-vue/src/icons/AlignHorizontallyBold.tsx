// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignHorizontallyBoldSvg from '@ant-design/icons-svg/lib/asn/AlignHorizontallyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignHorizontallyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignHorizontallyBold: AlignHorizontallyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignHorizontallyBoldSvg}></AntdIcon>;
};

AlignHorizontallyBold.displayName = 'AlignHorizontallyBold';
AlignHorizontallyBold.inheritAttrs = false;
export default AlignHorizontallyBold;