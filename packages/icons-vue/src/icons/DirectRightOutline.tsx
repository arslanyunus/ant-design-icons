// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectRightOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectRightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectRightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectRightOutline: DirectRightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectRightOutlineSvg}></AntdIcon>;
};

DirectRightOutline.displayName = 'DirectRightOutline';
DirectRightOutline.inheritAttrs = false;
export default DirectRightOutline;