// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignVerticallyBoldSvg from '@ant-design/icons-svg/lib/asn/AlignVerticallyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignVerticallyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignVerticallyBold: AlignVerticallyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignVerticallyBoldSvg}></AntdIcon>;
};

AlignVerticallyBold.displayName = 'AlignVerticallyBold';
AlignVerticallyBold.inheritAttrs = false;
export default AlignVerticallyBold;