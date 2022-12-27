// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxReceiveBulkSvg from '@ant-design/icons-svg/lib/asn/DirectboxReceiveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxReceiveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxReceiveBulk: DirectboxReceiveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxReceiveBulkSvg}></AntdIcon>;
};

DirectboxReceiveBulk.displayName = 'DirectboxReceiveBulk';
DirectboxReceiveBulk.inheritAttrs = false;
export default DirectboxReceiveBulk;