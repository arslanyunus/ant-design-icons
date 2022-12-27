// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignJustifyrightBrokenSvg from '@ant-design/icons-svg/lib/asn/TextalignJustifyrightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignJustifyrightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignJustifyrightBroken: TextalignJustifyrightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignJustifyrightBrokenSvg}></AntdIcon>;
};

TextalignJustifyrightBroken.displayName = 'TextalignJustifyrightBroken';
TextalignJustifyrightBroken.inheritAttrs = false;
export default TextalignJustifyrightBroken;