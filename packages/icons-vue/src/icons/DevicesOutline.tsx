// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DevicesOutlineSvg from '@ant-design/icons-svg/lib/asn/DevicesOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DevicesOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DevicesOutline: DevicesOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DevicesOutlineSvg}></AntdIcon>;
};

DevicesOutline.displayName = 'DevicesOutline';
DevicesOutline.inheritAttrs = false;
export default DevicesOutline;