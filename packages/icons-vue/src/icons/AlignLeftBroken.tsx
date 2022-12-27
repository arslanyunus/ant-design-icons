// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignLeftBrokenSvg from '@ant-design/icons-svg/lib/asn/AlignLeftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignLeftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignLeftBroken: AlignLeftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignLeftBrokenSvg}></AntdIcon>;
};

AlignLeftBroken.displayName = 'AlignLeftBroken';
AlignLeftBroken.inheritAttrs = false;
export default AlignLeftBroken;