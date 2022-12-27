// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifycenterBrokenSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifycenterBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifycenterBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifycenterBroken: TextalignJustifycenterBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifycenterBrokenSvg}></AntdIcon>;
};

TextalignJustifycenterBroken.displayName = 'TextalignJustifycenterBroken';
TextalignJustifycenterBroken.inheritAttrs = false;
export default TextalignJustifycenterBroken;