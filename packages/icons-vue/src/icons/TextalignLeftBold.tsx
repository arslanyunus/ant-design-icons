// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignLeftBoldSvg from '@ant-design/icons-svg/lib/asn/TextalignLeftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignLeftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignLeftBold: TextalignLeftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignLeftBoldSvg}></AntdIcon>;
};

TextalignLeftBold.displayName = 'TextalignLeftBold';
TextalignLeftBold.inheritAttrs = false;
export default TextalignLeftBold;