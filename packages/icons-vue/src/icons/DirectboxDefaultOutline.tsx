// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxDefaultOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectboxDefaultOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxDefaultOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxDefaultOutline: DirectboxDefaultOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxDefaultOutlineSvg}></AntdIcon>;
};

DirectboxDefaultOutline.displayName = 'DirectboxDefaultOutline';
DirectboxDefaultOutline.inheritAttrs = false;
export default DirectboxDefaultOutline;