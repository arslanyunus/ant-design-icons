// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectLeftOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectLeftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectLeftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectLeftOutline: DirectLeftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectLeftOutlineSvg}></AntdIcon>;
};

DirectLeftOutline.displayName = 'DirectLeftOutline';
DirectLeftOutline.inheritAttrs = false;
export default DirectLeftOutline;