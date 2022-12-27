// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FirstlineOutlineSvg from '@ant-design/icons-svg/lib/asn/FirstlineOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FirstlineOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FirstlineOutline: FirstlineOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FirstlineOutlineSvg}></AntdIcon>;
};

FirstlineOutline.displayName = 'FirstlineOutline';
FirstlineOutline.inheritAttrs = false;
export default FirstlineOutline;