// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AutobrightnessOutlineSvg from '@ant-design/icons-svg/lib/asn/AutobrightnessOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AutobrightnessOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AutobrightnessOutline: AutobrightnessOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AutobrightnessOutlineSvg}></AntdIcon>;
};

AutobrightnessOutline.displayName = 'AutobrightnessOutline';
AutobrightnessOutline.inheritAttrs = false;
export default AutobrightnessOutline;