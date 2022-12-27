// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WindOutlineSvg from '@ant-design/icons-svg/lib/asn/WindOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WindOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WindOutline: WindOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindOutlineSvg}></AntdIcon>;
};

WindOutline.displayName = 'WindOutline';
WindOutline.inheritAttrs = false;
export default WindOutline;