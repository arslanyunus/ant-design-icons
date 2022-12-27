// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoBulkSvg from '@ant-design/icons-svg/lib/asn/VideoBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoBulk: VideoBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoBulkSvg}></AntdIcon>;
};

VideoBulk.displayName = 'VideoBulk';
VideoBulk.inheritAttrs = false;
export default VideoBulk;