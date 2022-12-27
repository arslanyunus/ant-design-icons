// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignLeftBoldSvg from '@ant-design/icons-svg/lib/asn/AlignLeftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignLeftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignLeftBold: AlignLeftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignLeftBoldSvg}></AntdIcon>;
};

AlignLeftBold.displayName = 'AlignLeftBold';
AlignLeftBold.inheritAttrs = false;
export default AlignLeftBold;