// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoBoldSvg from '@ant-design/icons-svg/lib/asn/VideoBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoBold: VideoBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoBoldSvg}></AntdIcon>;
};

VideoBold.displayName = 'VideoBold';
VideoBold.inheritAttrs = false;
export default VideoBold;