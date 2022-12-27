// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignLeftBrokenSvg from '@ant-design/icons-svg/lib/asn/TextalignLeftBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignLeftBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignLeftBroken: TextalignLeftBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignLeftBrokenSvg}></AntdIcon>;
};

TextalignLeftBroken.displayName = 'TextalignLeftBroken';
TextalignLeftBroken.inheritAttrs = false;
export default TextalignLeftBroken;