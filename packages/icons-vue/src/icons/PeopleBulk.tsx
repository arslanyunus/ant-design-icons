// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PeopleBulkSvg from '@ant-design/icons-svg/lib/asn/PeopleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PeopleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PeopleBulk: PeopleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PeopleBulkSvg}></AntdIcon>;
};

PeopleBulk.displayName = 'PeopleBulk';
PeopleBulk.inheritAttrs = false;
export default PeopleBulk;