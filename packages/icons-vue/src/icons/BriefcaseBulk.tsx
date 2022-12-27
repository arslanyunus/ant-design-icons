// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BriefcaseBulkSvg from '@ant-design/icons-svg/lib/asn/BriefcaseBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BriefcaseBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BriefcaseBulk: BriefcaseBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BriefcaseBulkSvg}></AntdIcon>;
};

BriefcaseBulk.displayName = 'BriefcaseBulk';
BriefcaseBulk.inheritAttrs = false;
export default BriefcaseBulk;